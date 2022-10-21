class Api::V1::CompetitorsController < ApplicationController
  skip_before_action :authorized, only: %i[index show]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    competitors = Competitor.all
    render json: competitors
  end

  def show
    competitor = find_competitor
    render json: competitor
  end

  def create
    competitor = Competitor.create(competitor_params)
    render json: competitor, status: :created
  end

  def update
    competitor = find_competitor
    competitor.update(competitor_params)
    render json: competitor
  end

  def destroy
    competitor = find_competitor
    competitor.destroy
    head :no_content
  end

  private

  def competitor_params
    params.permit(:first_name, :last_name, :nationality_id)
  end

  def find_competitor
    Competitor.find(params[:id])
  end

  def render_not_found_response
    render json: { error: 'Competitor not found' }, status: :not_found
  end
end
