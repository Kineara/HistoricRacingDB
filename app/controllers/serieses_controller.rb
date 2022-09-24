class SeriesesController < ApplicationController
  def index 
    serieses = Series.all 
    render json: serieses
  end

  def show
    series = Series.find(params[:id])
    render json: series 
  end
end
