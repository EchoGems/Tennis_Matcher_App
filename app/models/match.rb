class Match < ApplicationRecord
  belongs_to :user
  validate :match_date_cannot_be_in_the_past
  validates :location, presence: true

  def match_date_cannot_be_in_the_past
    if timeslot < Date.today
      errors.add(:timeslot_error, "You can't schedule a match in the past")
    end
  end

  def self.match_info
      matches = []
      all.each do |m|
        loc = Location.find_by_name(m.location)
        p loc
        if m.user2_id.blank?
          matches << {id: m.id, location: loc.name.gsub!(/_/, ' '), address: loc.address, zip: loc.zip, timeslot: m.timeslot, user2_id: m.user2_id, user_id: m.user_id, user_name: m.user.name_initial, user_skill: m.user.skill_level, user2_skill: ""}
        else
          user2 = User.find(m.user2_id)
          matches << {id: m.id, location: loc.name.gsub!(/_/, ' '), address: loc.address, zip: loc.zip, timeslot: m.timeslot, user2_id: m.user2_id, user_id: m.user_id, user_name: m.user.name_initial, user2_name: user2.name_initial, user_skill: m.user.skill_level, user2_skill: user2.skill_level}
        end
      end
      matches = matches.sort_by{|match| match[:timeslot]}
    end

end
