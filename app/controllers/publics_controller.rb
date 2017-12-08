class PublicsController < ApplicationController
  def home
  end

  def about
  end

  def update
    @user = current_user
    if params.has_key?(:skill_level)
      @user.update(skill_level: params[:skill_level])
      @user.save
      render "profile"
    else

    end
  end

  private
  def user_params
    params.permit(:skill_level)
  end


end
