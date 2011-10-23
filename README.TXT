twitmap
v 0.1

#ows loc
40.7091576586,-74.011040926

Test Queries
http://search.twitter.com/search.json?q=%35ows&geocode=40.7091576586,-74011040926,1km&page=1&rpp=10&result_type=recent&show_user=true&with_twitter_user_id=true

http://search.twitter.com/search.json?q=ows&geocode=40.7091576586,-74011040926,1km

http://search.twitter.com/search.json?q=%23ows&geocode=40.7092876%2C-74.0111915%2C1km


TTD:

10 get form data
20 build request string
30 submit ajax request w/ callback
40 parse thru json object
50 check for geolocation
60 split results into geolocation / geo : null
70 loop through 
