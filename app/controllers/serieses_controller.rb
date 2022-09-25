class SeriesesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index 
    serieses = Series.all 
    render json: serieses, include: :seasons 
  end

  def show 
    series = find_series 
    render json: series 
  end

  def create 
    series = Series.create(series_params)
    render json: series, status: :created 
  end

  def update 
    series = find_series 
    series.update(series_params)
    render json: series 
  end

  def destroy 
    series = find_series 
    series.destroy 
    head :no_content 
  end

  private 

  def series_params 
    params.permit(:name)
  end

  def find_series
    Series.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Series not found" }, status: :not_found
  end
end
