class Api::V1::DbSummaryController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index 
    data_totals = {
    events: Event.all.length,
    manufacturers: Manufacturer.all.length,
    nationalities: Nationality.all.length,
    competitors: Competitor.all.length,
    teams: Team.all.length,
    series: Series.all.length,
    tracks: Track.all.length
    }

    render json: data_totals
  end
end
