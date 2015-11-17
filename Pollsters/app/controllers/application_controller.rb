class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def confirm_logged_in!
    unless session[:user_id]
      render json: {error: "You must be logged in!"}, status: :unathorized
      return false
    end
    #set current_user if logged in
    @current_user ||= User.find_by_id(session[:user_id]).id
  end

end


#any before_filter that can stop execution (by returning false) should have a ! at the end of it's name