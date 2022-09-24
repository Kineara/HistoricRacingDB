class SeriesesController < ApplicationController
  def index 
    serieses = Series.all 
    render json: serieses
  end
end
