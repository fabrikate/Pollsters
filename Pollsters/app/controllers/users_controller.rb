class UsersController < ApplicationController
  before_action :confirm_logged_in!, except: [:create]
  before_action :ensure_correct_user!, except: [:create]
  before_action :set_user, except: [:create]

  # GET /users/1
  # GET /users/1.json
  def show
    render json: @user
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: { id: @user.id, email: @user.email }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    if @user.update(user_params)

      render json: { id: @user.id, email: @user.email }, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    render json: {message: "#{@user.id} deleted"}, status: :ok
  end

  private
    def ensure_correct_user!
      unless @current_user == params[:id].to_i
        render json: {error: "Invalid user."}, status: :unathorized
        return false
      end
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :password)
    end

end
