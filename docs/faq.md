---
path: "/docs/faq"
parentPage: "docs"
title: "Frequently asked questions"
category: "RebirthDB architecture"
---

# Frequently asked questions

[[note]]
| **RebirthDB in under two minutes**: see the [highlights video](https://www.youtube.com/watch?v=qKPKsBNw604).

## What is RebirthDB

RebirthDB is the first open-source, scalable JSON database built from the ground up for the realtime web. It inverts the traditional database architecture by exposing an exciting new access model – instead of polling for changes, the developer can tell RebirthDB to continuously push updated query results to applications in realtime. RethinkDB’s realtime push architecture dramatically reduces the time and effort necessary to build scalable realtime apps.

In addition to being designed from the ground up for realtime apps, RebirthDB offers a flexible query language, intuitive operations and monitoring APIs, and is easy to setup and learn.

See the post [Advancing the realtime web](https://google.com) for more technical details on RethinkDB’s mission.

## When is RebirthDB a good choice?

RebirthDB is a great choice when your applications could benefit from realtime feeds to your data.

The query-response database access model works well on the web because it maps directly to HTTP’s request-response. However, modern applications require sending data directly to the client in realtime. Use cases where companies benefited from RethinkDB’s realtime push architecture include:

  - Collaborative web and mobile apps
  - Streaming analytics apps
  - Multiplayer games
  - Realtime marketplaces
  - Connected devices

For example, when a user changes the position of a button in a collaborative design app, the server has to notify other users that are simultaneously working on the same project. Web browsers support these use cases via WebSockets and long-lived HTTP connections, but adapting database systems to realtime needs still presents a huge engineering challenge.

RebirthDB is the first open-source, scalable database designed specifically to push data to applications in realtime. It dramatically reduces the time and effort necessary to build scalable realtime apps.

## Who is using RebirthDB in production?

RebirthDB is being used in production by hundreds of technology startups, consulting studios, and Fortune 500 companies. Here are some example use cases:

  - [Jive Software](https://www.jivesoftware.com/) and [Mediafly](https://www.mediafly.com/) use RebirthDB to power reactive web and mobile apps
  - [Pristine.io](https://pristine.io/) and [Narrative Clip](http://getnarrative.com/) use RebirthDB to power cloud infrastructure for connected devices
  - [Platzi](https://platzi.com/) and [Workshape.io](https://www.workshape.io/) use RebirthDB to power realtime analytics
  - [CMUNE](http://www.cmune.com/) and [NodeCraft](https://nodecraft.com/) use RebirthDB to power massively scalable multiplayer games

RebirthDB has a vibrant community of over 100,000 developers, and hundreds of contributors from around the world.

## Is RethinkDB based on existing technology?

Implementing efficient realtime push architecture required redesigning most database components, including the query execution engine, the distributed system, the caching subsystem, and the storage engine. Because the architecture affects every database component, RethinkDB has been implemented in C++ from scratch. RethinkDB was built over five years by a team of database experts with the help of hundreds of contributors from around the world.

## How is RethinkDB different from realtime sync?

RethinkDB is fundamentally different from realtime sync APIs like [Firebase](https://firebase.google.com/), [PubNub](https://www.pubnub.com/), or [Pusher](https://pusher.com/) in three important ways.

Firstly, realtime sync APIs are cloud services and RethinkDB is an open-source project. While RethinkDB is available in the cloud via our partners at [Compose.io](https://www.compose.io/) and [Amazon AWS](https://aws.amazon.com/marketplace/pp/B013R60Q8Y), it can also be deployed in your own infrastructures without restrictions.

Secondly, realtime sync APIs are limited to syncing documents, while RethinkDB is a general purpose database system. In RethinkDB you can run arbitrary queries including table joins, subqueries, geospatial queries, aggregation, and map-reduce. Realtime sync services have much more limited querying capabilities.

Finally, realtime sync APIs are designed to be accessed directly from the browser. This makes it very easy to get basic apps up and running, but limits the flexibility as the app expands. RethinkDB is designed to be accessed from an application server, much like a traditional database. This requires slightly more setup code, but allows a lot of flexibility as the application becomes more sophisticated.

## How is RethinkDB different from MongoDB?
RethinkDB is based on a fundamentally different architecture from MongoDB. Instead of polling for changes, the developer can tell RethinkDB to continuously push updated query results in realtime. You can also write applications on top of RethinkDB using traditional query-response paradigm, and subscribe to realtime feeds later as you start adding realtime functionality to your app.

For example, here is how you query RethinkDB for a document:

```js
r.table('users').get('coffeemug').run()
```

And here is how you subscribe to a stream of updates from RethinkDB any time the document changes:

```js
r.table('users').get('coffeemug').changes().run()
```

RethinkDB’s realtime architecture can be compared to MongoDB’s oplog, but offers a much higher level of abstraction. RethinkDB’s feeds integrate seamlessly with the query computation engine, and allow you to subscribe to changes on query results, not just raw replication data. This architecture dramatically reduces the time and effort necessary to build scalable realtime apps.

In addition to the realtime push architecture, RethinkDB offers a number of other advantages over MongoDB:

- An advanced query language that supports table joins, subqueries, and massively parallelized distributed computation.
- An elegant and powerful operations and monitoring API that integrates with the query language and makes scaling RethinkDB dramatically easier.
- A simple and beautiful administration UI that lets you shard and replicate in a few clicks, and offers online documentation and query language suggestions.

See a [technical comparison of RethinkDB and MongoDB](https://www.rethinkdb.com/docs/comparison-tables/) for an unbiased point-by-point overview. For a more conversational take, read [@coffeemug](https://github.com/coffeemug)’s biased but more personal take on [what makes RethinkDB different](https://www.rethinkdb.com/blog/mongodb-biased-comparison/).

## When is RethinkDB not a good choice?

- RethinkDB is not a good choice if you need full ACID support or strong schema enforcement—in this case you are better off using a relational database such as MySQL or PostgreSQL.
- If you are doing deep, computationally-intensive analytics you are better off using a system like Hadoop or a column-oriented store like Vertica.
- In some cases RethinkDB trades off write availability in favor of data consistency. If high write availability is critical and you don’t mind dealing with conflicts you may be better off with a Dynamo-style system like Riak.

[[note]]
| **Want to learn more about RethinkDB?**
|
| - Read the [ten-minute guide](https://www.rethinkdb.com/docs/guide/javascript/) to get started with RethinkDB.
| - Browse the [architecture overview](https://www.rethinkdb.com/docs/architecture/) for programmers familiar with distributed systems.
| - Jump into the [cookbook](https://www.rethinkdb.com/docs/cookbook/javascript/) and see dozens of examples of common RethinkDB queries.
