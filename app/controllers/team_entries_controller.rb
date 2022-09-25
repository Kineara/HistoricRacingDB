class TeamEntriesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # def index 
  #   team_entries = TeamEntry.all 
  #   render json: team_entries
  # end

  def show 
    team_entry = find_team_entry
    render json: team_entry
  end

  def create 
    team_entry = TeamEntry.create(team_entry_params)
    render json: team_entry, status: :created 
  end

  def update 
    team_entry = find_team_entry
    team_entry.update(team_entry_params)
    render json: team_entry
  end

  def destroy 
    team_entry = find_team_entry
    team_entry.destroy 
    head :no_content 
  end

  private 

  def team_entry_params 
    params.permit(:name, :team_entry_id, :track_id)
  end

  def find_team_entry
    TeamEntry.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "TeamEntry not found" }, status: :not_found
  end
end
