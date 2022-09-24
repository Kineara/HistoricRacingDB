class ManufacturersController < ApplicationController
  def index 
    manufacturers = Manufacturer.all 
    render json: manufacturers 
  end
end
