# 11ty Serverless Fetch

So, here's a test case to describe my issue.

Two URLs:

- /build/
- /serverless/

Hit the serverless endpoint, and with every hit you'll see the verbose setting with Fetch log that it's fetching:

`[11ty/eleventy-fetch] Fetching: https://dummyjson.com/products/1`

You can see everytime the serverless function is hit, the URL is fetched from source.
