class PollsController < ApplicationController
  # before_action :confirm_logged_in!, except: [:index, :show]
  # before_action :set_poll, only: [:show, :update, :destroy]
  # before_action :ensure_correct_owner!, only: [:update, :destroy]

  def index
    @polls = Poll.all
    render json: @polls
  end

  # GET /polls/1
  def show
    render json: @poll, status: :ok
  end

  # POST /polls
  def create
    @poll = Poll.new(poll_params)
    if @poll.save
      render json: @poll, status: :created
    else
      render json: @poll.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /polls/1
  def update
    if @poll.update(poll_params)
      render json: @poll, status: :ok
    else
      render json: @poll.errors, status: :unprocessable_entity
    end
  end

  # DELETE /polls/1
  def destroy
    @poll.destroy
    render json: @contact, status: :ok
  end

  private
    def ensure_correct_owner!
      unless @current_user == @poll.user_id.to_i
        render json: {error: "Invalid user."}, status: :unathorized
        return false
      end
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_poll
      @poll = Poll.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def poll_params
      params.require(:poll).permit(:title, :options, :user_id)
    end
end
