class SubeventsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index 
    subevents = Subevent.all 
    render json: subevents
  end

  def show 
    subevent = find_subevent
    render json: subevent
  end

  def create 
    subevent = Subevent.create(subevent_params)
    render json: subevent, status: :created 
  end

  def update 
    subevent = find_subevent
    subevent.update(subevent_params)
    render json: subevent
  end

  def destroy 
    subevent = find_subevent
    subevent.destroy 
    head :no_content 
  end

  private 

  def subevent_params 
    params.permit(:name, :start_date, :end_date, :event_id)
  end

  def find_subevent
    Subevent.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Season not found" }, status: :not_found
  end
end
