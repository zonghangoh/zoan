class HomeController < ApplicationController
  def index
    render inertia: "Landing"
  end
end