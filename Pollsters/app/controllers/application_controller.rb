class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def confirm_logged_in!
    unless session[:user_id]
      render json: {error: "You must be logged in!"}, status: :unathorized
      return false
    end
  end

  def user_poll
    # Let's not make a database query if we don't need to!
    return unless session[:user_id]

    # if session[:user_id] == Poll.find
    # Defines @current_user if it is not already defined.
    # if User.find_by_id(session[:user_id]) ==
    #   Poll.find//params
    # @current_user ||= User.find_by_id(session[:user_id])


  end

end


#any before_filter that can stop execution (by returning false) should have a ! at the end of it's name