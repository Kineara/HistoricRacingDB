class EventsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    events = Event.all
    render json: events.length 
  end

  def show
    event = find_event
    render json: event,
           include: ['subevents', 'subevents.team_entries', 'subevents.team_entries.teams', 'subevents.team_entries.vehicle',
                     'subevents.team_entries.competitors', 'subevents.team_entries.result']
  end

  def create
    event = Event.create(event_params)
    render json: event, status: :created
  end

  def update
    event = find_event
    event.update(event_params)
    render json: event
  end

  def destroy
    event = find_event
    event.destroy
    head :no_content
  end

  private

  def event_params
    params.permit(:name, :event_id, :track_id)
  end

  def find_event
    Event.find(params[:id])
  end

  def render_not_found_response
    render json: { error: 'Event not found' }, status: :not_found
  end
end
