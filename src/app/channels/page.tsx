export default function Channels() {
  const mediaChannels = [
    {
      name: "Mahalasa Darshan TV",
      type: "Television",
      description: "24/7 live streaming of temple activities, aarti, and special ceremonies",
      features: ["Live temple darshan", "Daily aarti broadcasts", "Festival coverage", "Spiritual discourses"],
      access: "Cable TV & Online Streaming",
      icon: "📺"
    },
    {
      name: "Mahalasa Radio",
      type: "Radio",
      description: "Devotional music, bhajans, and spiritual talks throughout the day",
      features: ["Classical bhajans", "Vedic chanting", "Spiritual talks", "Community announcements"],
      access: "AM/FM & Online Radio",
      icon: "📻"
    },
    {
      name: "Mahalasa YouTube",
      type: "Digital",
      description: "Comprehensive video library of temple events, stories, and teachings",
      features: ["Historical documentaries", "Ritual explanations", "Festival highlights", "Educational content"],
      access: "YouTube Channel",
      icon: "📹"
    },
    {
      name: "Mahalasa Podcast",
      type: "Audio",
      description: "Weekly podcasts featuring temple stories, devotee experiences, and spiritual guidance",
      features: ["Devotee stories", "Spiritual guidance", "Historical narratives", "Q&A sessions"],
      access: "All Podcast Platforms",
      icon: "🎧"
    }
  ];

  const socialMedia = [
    { platform: "Facebook", handle: "@MahalasaTemple", followers: "50K+", content: "Daily updates, photos, live streams" },
    { platform: "Instagram", handle: "@mahalasa_official", followers: "25K+", content: "Temple photography, stories, reels" },
    { platform: "Twitter", handle: "@MahalasaNews", followers: "15K+", content: "News, announcements, quick updates" },
    { platform: "WhatsApp", handle: "Temple Groups", followers: "5K+", content: "Community updates, event notifications" }
  ];

  const programs = [
    {
      title: "Mangala Aarti Live",
      time: "5:00 AM Daily",
      description: "Start your day with live morning aarti from the temple",
      channels: ["TV", "YouTube", "Facebook Live"]
    },
    {
      title: "Sandhya Aarti",
      time: "7:00 PM Daily",
      description: "Evening prayers and aarti ceremony",
      channels: ["TV", "Radio", "YouTube Live"]
    },
    {
      title: "Bhajan Sandhya",
      time: "Saturday 8:00 PM",
      description: "Weekly devotional music and singing sessions",
      channels: ["Radio", "YouTube", "Instagram Live"]
    },
    {
      title: "Spiritual Discourse",
      time: "Sunday 6:00 PM",
      description: "Weekly talks on scriptures and spiritual topics",
      channels: ["TV", "Podcast", "YouTube"]
    },
    {
      title: "Festival Special",
      time: "During Festivals",
      description: "Extended coverage of major festivals and celebrations",
      channels: ["All Channels", "Social Media"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-red-600">Channels</h1>
      
      <div className="max-w-6xl mx-auto">
        <section className="mb-8 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">
              📱 Divine Connection Through Media 📱
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Stay connected with Goddess Mahalasa through our multi-channel media network. 
              Experience divine darshan, participate in prayers, and join our global community from anywhere in the world.
            </p>
            <div className="mt-4 text-blue-600 font-semibold">
              "विश्व भर में भक्तों का मिलन" - Connecting devotees worldwide
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-orange-700">Media Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {mediaChannels.map((channel, index) => (
              <div key={index} className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{channel.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{channel.name}</h3>
                      <p className="text-blue-100">{channel.type}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{channel.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-base md:text-lg mb-3 text-blue-600">Features:</h4>
                    <div className="grid gap-2">
                      {channel.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm"><strong>Access:</strong> {channel.access}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-orange-700">Social Media Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {socialMedia.map((social, index) => (
              <div key={index} className={`p-4 md:p-6 rounded-lg border-l-4 ${
                social.platform === 'Facebook' ? 'bg-blue-50 border-blue-400' :
                social.platform === 'Instagram' ? 'bg-pink-50 border-pink-400' :
                social.platform === 'Twitter' ? 'bg-sky-50 border-sky-400' :
                'bg-green-50 border-green-400'
              }`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{social.platform}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    social.platform === 'Facebook' ? 'bg-blue-200 text-blue-800' :
                    social.platform === 'Instagram' ? 'bg-pink-200 text-pink-800' :
                    social.platform === 'Twitter' ? 'bg-sky-200 text-sky-800' :
                    'bg-green-200 text-green-800'
                  }`}>
                    {social.followers}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{social.handle}</p>
                <p className="text-sm text-gray-700">{social.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-orange-700">Daily Program Schedule</h2>
          <div className="space-y-4">
            {programs.map((program, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div className="lg:w-2/3">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-3">{program.description}</p>
                  </div>
                  <div className="lg:w-1/3 lg:text-right">
                    <p className="text-lg font-bold text-orange-600 mb-2">{program.time}</p>
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {program.channels.map((channel, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          <section className="bg-yellow-50 p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-700">Mobile App</h2>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Mahalasa Connect</h3>
              <p className="text-gray-700 mb-4">
                Official temple app with live streaming, prayer times, festival calendar, 
                and community features.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded">
                <span>Live Darshan</span>
                <span className="text-green-500">✓</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded">
                <span>Prayer Notifications</span>
                <span className="text-green-500">✓</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded">
                <span>Festival Calendar</span>
                <span className="text-green-500">✓</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded">
                <span>Community Chat</span>
                <span className="text-green-500">✓</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
                🍎 Download iOS
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                🤖 Download Android
              </button>
            </div>
          </section>

          <section className="bg-purple-50 p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-purple-700">Newsletter</h2>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Mahalasa Patrika</h3>
              <p className="text-gray-700 mb-4">
                Monthly digital newsletter with temple news, spiritual articles, 
                community updates, and festival information.
              </p>
            </div>
            <div className="space-y-3 mb-6">
              <div className="p-3 bg-white rounded">
                <h4 className="font-semibent mb-1">Monthly Features</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Temple activities and events</li>
                  <li>• Spiritual articles and teachings</li>
                  <li>• Community news and achievements</li>
                  <li>• Festival schedules and significance</li>
                  <li>• Devotee experiences and stories</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 border rounded-lg"
              />
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </section>
        </div>

        <section className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 md:p-8 rounded-lg text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Stay Connected</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Join our digital community and never miss a moment of divine connection. 
            Follow us across all platforms for daily inspiration, live darshan, and spiritual guidance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-2xl mb-2">📺</div>
              <p className="font-semibent text-blue-600">Watch Live</p>
              <p className="text-xs text-gray-600">24/7 Temple Streaming</p>
            </div>
            <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-2xl mb-2">📻</div>
              <p className="font-semibent text-green-600">Listen Now</p>
              <p className="text-xs text-gray-600">Devotional Radio</p>
            </div>
            <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-2xl mb-2">📱</div>
              <p className="font-semibent text-purple-600">Follow Social</p>
              <p className="text-xs text-gray-600">Daily Updates</p>
            </div>
            <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-2xl mb-2">📰</div>
              <p className="font-semibent text-orange-600">Get Newsletter</p>
              <p className="text-xs text-gray-600">Monthly Patrika</p>
            </div>
          </div>
          <div className="mt-8 p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-600">
              🔔 Enable notifications to receive alerts for live aarti, special events, and important announcements.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}