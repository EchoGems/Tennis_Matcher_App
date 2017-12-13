class MatchesController < ApplicationController
  before_action :set_match, only: [:show, :edit, :update, :destroy, :join, :leave]
  before_action :authenticate_user!, except: [:destroy]
  # before_action :set_user_info, only: [:show]

  # GET /matches
  # GET /matches.json

  def show_locations
    @locations = Location.all
  end

  def index
    @matches = Match.match_info
  end

  def join
    @match.update(user2_id: params[:user2_id])
    @match.save
    redirect_to '/matches'
  end
  def leave
    @match.update(user2_id: nil)
    @match.save
    redirect_to '/matches'
  end

  def show
  end

  # GET /matches/new
  def new
    @match = Match.new
    @google_api_key = 'AIzaSyCsAS0jtTVddtNAwYcrfDhPZziN6F620jA'
    @map_center = [32.764212, -117.162570]
    @map_zoom = 11
    @locations = Location.all
  end

  # GET /matches/1/edit
  def edit
    @google_api_key = 'AIzaSyCsAS0jtTVddtNAwYcrfDhPZziN6F620jA'
    @map_center = [32.764212, -117.162570]
    @map_zoom = 11
    @locations = Location.all
  end

  # POST /matches
  # POST /matches.json
  def create
    @match = Match.new(match_params)
    @locations = Location.all

    respond_to do |format|
      if @match.save
        format.html { redirect_to '/matches', notice: 'Match was successfully created.' }
        format.json { render :show, status: :created, location: @match }
      else
        format.html { render :new }
        format.json { render json: @match.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /matches/1
  # PATCH/PUT /matches/1.json
  def update
    respond_to do |format|
      if @match.update(match_params)
        format.html { redirect_to '/matches', notice: 'Match was successfully updated.' }
        format.json { render :show, status: :ok, location: @match }
      else
        format.html { render :edit }
        format.json { render json: @match.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /matches/1
  # DELETE /matches/1.json
  def destroy
    @match.destroy
    respond_to do |format|
      format.html { redirect_to matches_url, notice: 'Match was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def map

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_match
      @match = Match.find(params[:id])
    end

    # def set_user_info
    #   @user1_first_name = User.find(@match.user_id).first_name
    #   @user1_last_name = User.find(@match.user_id).last_name
    # end


    # Never trust parameters from the scary internet, only allow the white list through.
    def match_params
      params.require(:match).permit(:user_id, :user1_id, :user2_id, :location, :timeslot)
    end
end
