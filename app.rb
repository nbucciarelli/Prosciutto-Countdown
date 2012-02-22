require 'rubygems'
require 'sinatra'
require 'haml'

get '/' do
  @title = 'Prosciutto Countdown!'
  haml :index
end
