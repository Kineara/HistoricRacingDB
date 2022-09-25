class TracksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index 
    tracks = Track.all 
    render json: tracks 
  end

  def show 
    track = find_track 
    render json: track 
  end

  def create 
    track = Track.create(track_params)
    render json: track, status: :created 
  end

  def update 
    track = find_track 
    track.update(track_params)
    render json: track 
  end

  def destroy 
    track = find_track 
    track.destroy 
    head :no_content 
  end

  private 

  def track_params 
    params.permit(:name, :nationality_id)
  end

  def find_track
    Track.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Track not found" }, status: :not_found
  end
end
