class PublicsController < ApplicationController
  def home
  end

  def about
  end

  def profile

  end

  def update
    params.permit(:skill_level, :image)
    @user = current_user
    if params.has_key?(:skill_level)
      @user.update(skill_level: params[:skill_level])
      @user.save
    end

    if params.has_key?(:image)
      @user.update(image: params[:image])
      @user.save
    end

    render "profile"
  end

  private
  def user_params
    params.permit(:skill_level, :image)
  end


end
