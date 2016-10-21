class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.all
  end

  def create
    @person = Person.new(name: params["name"], bio: params["bio"])

    if @person.save
      redirect_to "/api/v1/people/#{@person.id}.json"
    else
      render json: { errors: @person.errors.full_messages }, status: 422
    end
  end

  def show
    @person = Person.find(params[:id])
  end
end