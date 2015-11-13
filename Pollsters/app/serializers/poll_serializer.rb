class PollSerializer < ActiveModel::Serializer
  attributes :title, :id

  has_many :options

  def options
    object.options.order('vote DESC')
    #this displays the options with the highest number of votes first
  end

end
