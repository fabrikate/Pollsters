class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  # before_action :current_user

  # def confirm_logged_in!
  #   unless session[:user_id]
  #     render json: error: "You must be logged in!"
  #     return false
  #     # redirect_to login_path, alert: "You must be logged in"
  #   end
  # end

  # # def current_user!
  # #   unless session[:user_id]
  # #   return false
  # #   @current_user ||= User.find_by_id session[:user_id]
  # # end

  # helper_method :current_user
end


#any before_filter that can stop execution (by returning false) should have a ! at the end of it's name