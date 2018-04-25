class Event < ApplicationRecord
  validates :name, presence: true,uniqueness:true
  validates :city, presence:true
  validates :date, presence:true
  
end
