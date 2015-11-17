class OptionsController < ApplicationController
  # before_action :confirm_logged_in!, only: [:create, :destroy]
  # before_action :set_option, only: [:show, :edit, :update, :destroy]

  # GET /options
  def index
    @options = Option.all
    render json: @options
  end

  def show
    render json: @option, status: :ok
  end

  def create
    @option = Option.new(option_params)
    if @option.save
      render json: @option, status: :created
    else
      render json: @option.errors, status: :unprocessable_entity
    end
  end

  def update
    if @option.update(option_params)
      render json: @option, status: :ok
    else
      render json: @option.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @option.destroy
    render json: @option, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_option
      @option = Option.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def option_params
      params.require(:option).permit(:poll_id, :answer, :vote)
    end
end
