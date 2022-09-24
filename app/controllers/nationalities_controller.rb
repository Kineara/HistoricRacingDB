class NationalitiesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index 
    nationalities = Nationality.all 
    render json: nationalities 
  end

  def show 
    nationality = find_nationality 
    render json: nationality 
  end

  def create 
    nationality = Nationality.create(nationality_params)
    render json: nationality, status: :created 
  end

  def update 
    nationality = find_nationality 
    nationality.update(nationality_params)
    render json: nationality 
  end

  def destroy 
    nationality = find_nationality 
    nationality.destroy 
    head :no_content 
  end

  private 

  def nationality_params 
    params.permit(:first_name, :last_name, :nationality_id)
  end

  def find_nationality
    Nationality.find_by(id: params[:id])
  end

  def render_not_found_response
    render json: { error: "Nationality not found" }, status: :not_found
  end
end
