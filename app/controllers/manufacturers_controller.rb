class ManufacturersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index 
    manufacturers = Manufacturer.all 
    render json: manufacturers 
  end

  def show 
    manufacturer = find_manufacturer 
    render json: manufacturer 
  end

  def create 
    manufacturer = Manufacturer.create(manufacturer_params)
    render json: manufacturer, status: :created 
  end

  def update 
    manufacturer = find_manufacturer 
    manufacturer.update(manufacturer_params)
    render json: manufacturer 
  end

  def destroy 
    manufacturer = find_manufacturer 
    manufacturer.destroy 
    head :no_content 
  end

  private 

  def manufacturer_params 
    params.permit(:first_name, :last_name, :nationality_id)
  end

  def find_manufacturer
    Manufacturer.find_by(id: params[:id])
  end

  def render_not_found_response
    render json: { error: "Manufacturer not found" }, status: :not_found
  end
end
