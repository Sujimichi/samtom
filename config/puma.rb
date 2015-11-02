# N.B. The hobby tier of heroku has an upper limit on database connections at
# 20, and fairly low ram limits. We'll use most of the ram in two processes and
# then add as many threads as we have connections.

workers Integer(ENV['PUMA_WORKERS'] || 2)
threads Integer(ENV['MIN_THREADS']  || 1), Integer(ENV['MAX_THREADS'] || 10)

preload_app!

rackup      DefaultRackup
port        ENV['PORT']     || 3000
environment ENV['RACK_ENV'] || 'development'

on_worker_boot do
  ActiveSupport.on_load(:active_record) do
    config = ActiveRecord::Base.configurations[Rails.env] ||
                Rails.application.config.database_configuration[Rails.env]
    config['pool'] = ENV['MAX_THREADS'] || 10
    ActiveRecord::Base.establish_connection(config)
  end
end
