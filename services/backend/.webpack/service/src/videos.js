/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/.prisma/client/index.js":
/*!**************************************************!*\
  !*** ../../node_modules/.prisma/client/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nconst {\n  PrismaClientKnownRequestError,\n  PrismaClientUnknownRequestError,\n  PrismaClientRustPanicError,\n  PrismaClientInitializationError,\n  PrismaClientValidationError,\n  NotFoundError,\n  decompressFromBase64,\n  getPrismaClient,\n  sqltag,\n  empty,\n  join,\n  raw,\n  Decimal,\n  objectEnumValues\n} = __webpack_require__(/*! @prisma/client/runtime/index */ \"../../node_modules/@prisma/client/runtime/index.js\")\n\n\nconst Prisma = {}\n\nexports.Prisma = Prisma\n\n/**\n * Prisma Client JS version: 4.1.1\n * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8\n */\nPrisma.prismaVersion = {\n  client: \"4.1.1\",\n  engine: \"8d8414deb360336e4698a65aa45a1fbaf1ce13d8\"\n}\n\nPrisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;\nPrisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError\nPrisma.PrismaClientRustPanicError = PrismaClientRustPanicError\nPrisma.PrismaClientInitializationError = PrismaClientInitializationError\nPrisma.PrismaClientValidationError = PrismaClientValidationError\nPrisma.NotFoundError = NotFoundError\nPrisma.Decimal = Decimal\n\n/**\n * Re-export of sql-template-tag\n */\nPrisma.sql = sqltag\nPrisma.empty = empty\nPrisma.join = join\nPrisma.raw = raw\nPrisma.validator = () => (val) => val\n\n/**\n * Shorthand utilities for JSON filtering\n */\nPrisma.DbNull = objectEnumValues.instances.DbNull\nPrisma.JsonNull = objectEnumValues.instances.JsonNull\nPrisma.AnyNull = objectEnumValues.instances.AnyNull\n\nPrisma.NullTypes = {\n  DbNull: objectEnumValues.classes.DbNull,\n  JsonNull: objectEnumValues.classes.JsonNull,\n  AnyNull: objectEnumValues.classes.AnyNull\n}\n\n\n  const path = __webpack_require__(/*! path */ \"path\")\n\nconst { findSync } = __webpack_require__(/*! @prisma/client/runtime */ \"../../node_modules/@prisma/client/runtime/index.js\")\nconst fs = __webpack_require__(/*! fs */ \"fs\")\n\n// some frameworks or bundlers replace or totally remove __dirname\nconst hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'\n\n// will work in most cases, ie. if the client has not been bundled\nconst regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname\n\n// if the client has been bundled, we need to look for the folders\nconst foundDirname = !regularDirname && findSync(process.cwd(), [\n    \"../../node_modules/.prisma/client\",\n    \"../node_modules/.prisma/client\",\n], ['d'], ['d'], 1)[0]\n\nconst dirname = regularDirname || foundDirname || __dirname\n\n/**\n * Enums\n */\n// Based on\n// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275\nfunction makeEnum(x) { return x; }\n\nexports.Prisma.ChannelScalarFieldEnum = makeEnum({\n  id: 'id',\n  youtubeId: 'youtubeId',\n  channelName: 'channelName',\n  authorName: 'authorName',\n  type: 'type',\n  status: 'status',\n  reviewed: 'reviewed',\n  customUrl: 'customUrl',\n  description: 'description',\n  country: 'country',\n  thumbnail: 'thumbnail',\n  thumbnailMedium: 'thumbnailMedium',\n  thumbnailHigh: 'thumbnailHigh',\n  defaultCategory: 'defaultCategory',\n  defaultLanguage: 'defaultLanguage',\n  viewCount: 'viewCount',\n  subscriberCount: 'subscriberCount',\n  hiddenSubscriberCount: 'hiddenSubscriberCount',\n  videoCount: 'videoCount',\n  createdAt: 'createdAt',\n  updatedAt: 'updatedAt',\n  lastCheckedAt: 'lastCheckedAt',\n  lastPublishedAt: 'lastPublishedAt',\n  publishedAt: 'publishedAt',\n  crawlState: 'crawlState'\n});\n\nexports.Prisma.ChannelLinkScalarFieldEnum = makeEnum({\n  id: 'id',\n  channelId: 'channelId',\n  url: 'url',\n  title: 'title',\n  type: 'type'\n});\n\nexports.Prisma.VideoScalarFieldEnum = makeEnum({\n  id: 'id',\n  youtubeId: 'youtubeId',\n  channelId: 'channelId',\n  type: 'type',\n  status: 'status',\n  reviewed: 'reviewed',\n  category: 'category',\n  youtubeTags: 'youtubeTags',\n  language: 'language',\n  title: 'title',\n  description: 'description',\n  duration: 'duration',\n  durationSeconds: 'durationSeconds',\n  viewCount: 'viewCount',\n  likeCount: 'likeCount',\n  commentCount: 'commentCount',\n  scheduledStartTime: 'scheduledStartTime',\n  actualStartTime: 'actualStartTime',\n  actualEndTime: 'actualEndTime',\n  sortTime: 'sortTime',\n  createdAt: 'createdAt',\n  updatedAt: 'updatedAt',\n  publishedAt: 'publishedAt'\n});\n\nexports.Prisma.QuotaUsageScalarFieldEnum = makeEnum({\n  id: 'id',\n  date: 'date',\n  endpoint: 'endpoint',\n  parts: 'parts',\n  points: 'points',\n  task: 'task',\n  source: 'source'\n});\n\nexports.Prisma.SortOrder = makeEnum({\n  asc: 'asc',\n  desc: 'desc'\n});\n\nexports.Prisma.QueryMode = makeEnum({\n  default: 'default',\n  insensitive: 'insensitive'\n});\n\nexports.Prisma.ChannelOrderByRelevanceFieldEnum = makeEnum({\n  youtubeId: 'youtubeId',\n  channelName: 'channelName',\n  authorName: 'authorName',\n  customUrl: 'customUrl',\n  description: 'description',\n  country: 'country',\n  thumbnail: 'thumbnail',\n  thumbnailMedium: 'thumbnailMedium',\n  thumbnailHigh: 'thumbnailHigh',\n  defaultLanguage: 'defaultLanguage'\n});\n\nexports.Prisma.ChannelLinkOrderByRelevanceFieldEnum = makeEnum({\n  url: 'url',\n  title: 'title'\n});\n\nexports.Prisma.VideoOrderByRelevanceFieldEnum = makeEnum({\n  youtubeId: 'youtubeId',\n  youtubeTags: 'youtubeTags',\n  language: 'language',\n  title: 'title',\n  description: 'description',\n  duration: 'duration'\n});\n\nexports.Prisma.QuotaUsageOrderByRelevanceFieldEnum = makeEnum({\n  date: 'date',\n  parts: 'parts',\n  task: 'task',\n  source: 'source'\n});\nexports.ChannelType = makeEnum({\n  BRAND: 'BRAND',\n  INDIVIDUAL: 'INDIVIDUAL',\n  COLLABORATION: 'COLLABORATION',\n  SHOW: 'SHOW',\n  EVENT: 'EVENT',\n  OTHER: 'OTHER'\n});\n\nexports.ChannelStatus = makeEnum({\n  ACTIVE: 'ACTIVE',\n  PAUSED: 'PAUSED',\n  MODERATED: 'MODERATED',\n  HIDDEN: 'HIDDEN',\n  ARCHIVED: 'ARCHIVED'\n});\n\nexports.Category = makeEnum({\n  TUTORIAL: 'TUTORIAL',\n  LIVECODING: 'LIVECODING',\n  SOFTSKILL: 'SOFTSKILL',\n  SHOW: 'SHOW',\n  TALK: 'TALK',\n  VLOG: 'VLOG',\n  DOCUMENTARY: 'DOCUMENTARY',\n  UPDATE: 'UPDATE',\n  ANNOUNCEMENT: 'ANNOUNCEMENT',\n  NEWS: 'NEWS',\n  QANDA: 'QANDA',\n  INTERVIEW: 'INTERVIEW',\n  REVIEW: 'REVIEW',\n  PORTFOLIOREVIEW: 'PORTFOLIOREVIEW',\n  OTHER: 'OTHER',\n  NONE: 'NONE'\n});\n\nexports.CrawlState = makeEnum({\n  PENDING: 'PENDING',\n  COMPLETED: 'COMPLETED',\n  ERROR: 'ERROR'\n});\n\nexports.ChannelLinkType = makeEnum({\n  Twitter: 'Twitter',\n  FacebooK: 'FacebooK',\n  LinkedIn: 'LinkedIn',\n  GitHub: 'GitHub',\n  Twitch: 'Twitch',\n  Instagram: 'Instagram',\n  Homepage: 'Homepage',\n  Blog: 'Blog',\n  YouTube: 'YouTube',\n  Podcast: 'Podcast',\n  Patreon: 'Patreon',\n  Shop: 'Shop',\n  Discord: 'Discord',\n  Slack: 'Slack',\n  Links: 'Links',\n  Link: 'Link',\n  TikTok: 'TikTok',\n  Course: 'Course'\n});\n\nexports.VideoType = makeEnum({\n  VIDEO: 'VIDEO',\n  SHORT: 'SHORT'\n});\n\nexports.VideoStatus = makeEnum({\n  UPCOMING: 'UPCOMING',\n  PUBLISHED: 'PUBLISHED',\n  MODERATED: 'MODERATED',\n  LIVE: 'LIVE',\n  HIDDEN: 'HIDDEN',\n  DELETED: 'DELETED',\n  PRIVATE: 'PRIVATE',\n  UNLISTED: 'UNLISTED',\n  OVERDUE: 'OVERDUE',\n  UNKNOWN: 'UNKNOWN'\n});\n\nexports.QuotaUsageEndpoints = makeEnum({\n  CHANNELSLIST: 'CHANNELSLIST',\n  PLAYLISTITEMSLIST: 'PLAYLISTITEMSLIST',\n  VIDEOSLIST: 'VIDEOSLIST'\n});\n\nexports.Prisma.ModelName = makeEnum({\n  Channel: 'Channel',\n  ChannelLink: 'ChannelLink',\n  Video: 'Video',\n  QuotaUsage: 'QuotaUsage'\n});\n\nconst dmmfString = \"{\\\"datamodel\\\":{\\\"enums\\\":[{\\\"name\\\":\\\"Category\\\",\\\"values\\\":[{\\\"name\\\":\\\"TUTORIAL\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"LIVECODING\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"SOFTSKILL\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"SHOW\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"TALK\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"VLOG\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"DOCUMENTARY\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"UPDATE\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"ANNOUNCEMENT\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"NEWS\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"QANDA\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"INTERVIEW\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"REVIEW\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"PORTFOLIOREVIEW\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"OTHER\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"NONE\\\",\\\"dbName\\\":null}],\\\"dbName\\\":null},{\\\"name\\\":\\\"ChannelStatus\\\",\\\"values\\\":[{\\\"name\\\":\\\"ACTIVE\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"PAUSED\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"MODERATED\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"HIDDEN\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"ARCHIVED\\\",\\\"dbName\\\":null}],\\\"dbName\\\":null},{\\\"name\\\":\\\"ChannelType\\\",\\\"values\\\":[{\\\"name\\\":\\\"BRAND\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"INDIVIDUAL\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"COLLABORATION\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"SHOW\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"EVENT\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"OTHER\\\",\\\"dbName\\\":null}],\\\"dbName\\\":null},{\\\"name\\\":\\\"CrawlState\\\",\\\"values\\\":[{\\\"name\\\":\\\"PENDING\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"COMPLETED\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"ERROR\\\",\\\"dbName\\\":null}],\\\"dbName\\\":null},{\\\"name\\\":\\\"ChannelLinkType\\\",\\\"values\\\":[{\\\"name\\\":\\\"Twitter\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"FacebooK\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"LinkedIn\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"GitHub\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Twitch\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Instagram\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Homepage\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Blog\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"YouTube\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Podcast\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Patreon\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Shop\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Discord\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Slack\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Links\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Link\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"TikTok\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"Course\\\",\\\"dbName\\\":null}],\\\"dbName\\\":null},{\\\"name\\\":\\\"VideoStatus\\\",\\\"values\\\":[{\\\"name\\\":\\\"UPCOMING\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"PUBLISHED\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"MODERATED\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"LIVE\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"HIDDEN\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"DELETED\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"PRIVATE\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"UNLISTED\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"OVERDUE\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"UNKNOWN\\\",\\\"dbName\\\":null}],\\\"dbName\\\":null},{\\\"name\\\":\\\"VideoType\\\",\\\"values\\\":[{\\\"name\\\":\\\"VIDEO\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"SHORT\\\",\\\"dbName\\\":null}],\\\"dbName\\\":null},{\\\"name\\\":\\\"QuotaUsageEndpoints\\\",\\\"values\\\":[{\\\"name\\\":\\\"CHANNELSLIST\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"PLAYLISTITEMSLIST\\\",\\\"dbName\\\":null},{\\\"name\\\":\\\"VIDEOSLIST\\\",\\\"dbName\\\":null}],\\\"dbName\\\":null}],\\\"models\\\":[{\\\"name\\\":\\\"Channel\\\",\\\"dbName\\\":null,\\\"fields\\\":[{\\\"name\\\":\\\"id\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":true,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":{\\\"name\\\":\\\"autoincrement\\\",\\\"args\\\":[]},\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"youtubeId\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":true,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"channelName\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"authorName\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"type\\\",\\\"kind\\\":\\\"enum\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"ChannelType\\\",\\\"default\\\":\\\"INDIVIDUAL\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"status\\\",\\\"kind\\\":\\\"enum\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"ChannelStatus\\\",\\\"default\\\":\\\"ACTIVE\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"reviewed\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Boolean\\\",\\\"default\\\":false,\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"customUrl\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":true,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"description\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"country\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"thumbnail\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"thumbnailMedium\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"thumbnailHigh\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"defaultCategory\\\",\\\"kind\\\":\\\"enum\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"Category\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"defaultLanguage\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"String\\\",\\\"default\\\":\\\"en\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"viewCount\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":-1,\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"subscriberCount\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":-1,\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"hiddenSubscriberCount\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Boolean\\\",\\\"default\\\":false,\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"videoCount\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":-1,\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"createdAt\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"DateTime\\\",\\\"default\\\":{\\\"name\\\":\\\"now\\\",\\\"args\\\":[]},\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"updatedAt\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"DateTime\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":true},{\\\"name\\\":\\\"lastCheckedAt\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"DateTime\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"lastPublishedAt\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"DateTime\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"publishedAt\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"DateTime\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"crawlState\\\",\\\"kind\\\":\\\"enum\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"CrawlState\\\",\\\"default\\\":\\\"PENDING\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"videos\\\",\\\"kind\\\":\\\"object\\\",\\\"isList\\\":true,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"Video\\\",\\\"relationName\\\":\\\"ChannelToVideo\\\",\\\"relationFromFields\\\":[],\\\"relationToFields\\\":[],\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"links\\\",\\\"kind\\\":\\\"object\\\",\\\"isList\\\":true,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"ChannelLink\\\",\\\"relationName\\\":\\\"ChannelToChannelLink\\\",\\\"relationFromFields\\\":[],\\\"relationToFields\\\":[],\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false}],\\\"primaryKey\\\":null,\\\"uniqueFields\\\":[],\\\"uniqueIndexes\\\":[],\\\"isGenerated\\\":false},{\\\"name\\\":\\\"ChannelLink\\\",\\\"dbName\\\":null,\\\"fields\\\":[{\\\"name\\\":\\\"id\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":true,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":{\\\"name\\\":\\\"autoincrement\\\",\\\"args\\\":[]},\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"channel\\\",\\\"kind\\\":\\\"object\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"Channel\\\",\\\"relationName\\\":\\\"ChannelToChannelLink\\\",\\\"relationFromFields\\\":[\\\"channelId\\\"],\\\"relationToFields\\\":[\\\"id\\\"],\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"channelId\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":true,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"Int\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"url\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"title\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"type\\\",\\\"kind\\\":\\\"enum\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"ChannelLinkType\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false}],\\\"primaryKey\\\":null,\\\"uniqueFields\\\":[],\\\"uniqueIndexes\\\":[],\\\"isGenerated\\\":false},{\\\"name\\\":\\\"Video\\\",\\\"dbName\\\":null,\\\"fields\\\":[{\\\"name\\\":\\\"id\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":true,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":{\\\"name\\\":\\\"autoincrement\\\",\\\"args\\\":[]},\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"youtubeId\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":true,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"channel\\\",\\\"kind\\\":\\\"object\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"Channel\\\",\\\"relationName\\\":\\\"ChannelToVideo\\\",\\\"relationFromFields\\\":[\\\"channelId\\\"],\\\"relationToFields\\\":[\\\"id\\\"],\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"channelId\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":true,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"Int\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"type\\\",\\\"kind\\\":\\\"enum\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"VideoType\\\",\\\"default\\\":\\\"VIDEO\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"status\\\",\\\"kind\\\":\\\"enum\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"VideoStatus\\\",\\\"default\\\":\\\"PUBLISHED\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"reviewed\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Boolean\\\",\\\"default\\\":false,\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"category\\\",\\\"kind\\\":\\\"enum\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"Category\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"youtubeTags\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":true,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"language\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"title\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"description\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"duration\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"durationSeconds\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":-1,\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"viewCount\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":-1,\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"likeCount\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":-1,\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"commentCount\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":-1,\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"scheduledStartTime\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"DateTime\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"actualStartTime\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"DateTime\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"actualEndTime\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"DateTime\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"sortTime\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"DateTime\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"createdAt\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"DateTime\\\",\\\"default\\\":{\\\"name\\\":\\\"now\\\",\\\"args\\\":[]},\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"updatedAt\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"DateTime\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":true},{\\\"name\\\":\\\"publishedAt\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"DateTime\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false}],\\\"primaryKey\\\":null,\\\"uniqueFields\\\":[],\\\"uniqueIndexes\\\":[],\\\"isGenerated\\\":false},{\\\"name\\\":\\\"QuotaUsage\\\",\\\"dbName\\\":null,\\\"fields\\\":[{\\\"name\\\":\\\"id\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":true,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":true,\\\"type\\\":\\\"Int\\\",\\\"default\\\":{\\\"name\\\":\\\"autoincrement\\\",\\\"args\\\":[]},\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"date\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"endpoint\\\",\\\"kind\\\":\\\"enum\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"QuotaUsageEndpoints\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"parts\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"points\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":true,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"Int\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"task\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false},{\\\"name\\\":\\\"source\\\",\\\"kind\\\":\\\"scalar\\\",\\\"isList\\\":false,\\\"isRequired\\\":false,\\\"isUnique\\\":false,\\\"isId\\\":false,\\\"isReadOnly\\\":false,\\\"hasDefaultValue\\\":false,\\\"type\\\":\\\"String\\\",\\\"isGenerated\\\":false,\\\"isUpdatedAt\\\":false}],\\\"primaryKey\\\":null,\\\"uniqueFields\\\":[],\\\"uniqueIndexes\\\":[],\\\"isGenerated\\\":false}],\\\"types\\\":[]},\\\"mappings\\\":{\\\"modelOperations\\\":[{\\\"model\\\":\\\"Channel\\\",\\\"plural\\\":\\\"channels\\\",\\\"findUnique\\\":\\\"findUniqueChannel\\\",\\\"findFirst\\\":\\\"findFirstChannel\\\",\\\"findMany\\\":\\\"findManyChannel\\\",\\\"create\\\":\\\"createOneChannel\\\",\\\"createMany\\\":\\\"createManyChannel\\\",\\\"delete\\\":\\\"deleteOneChannel\\\",\\\"update\\\":\\\"updateOneChannel\\\",\\\"deleteMany\\\":\\\"deleteManyChannel\\\",\\\"updateMany\\\":\\\"updateManyChannel\\\",\\\"upsert\\\":\\\"upsertOneChannel\\\",\\\"aggregate\\\":\\\"aggregateChannel\\\",\\\"groupBy\\\":\\\"groupByChannel\\\"},{\\\"model\\\":\\\"ChannelLink\\\",\\\"plural\\\":\\\"channelLinks\\\",\\\"findUnique\\\":\\\"findUniqueChannelLink\\\",\\\"findFirst\\\":\\\"findFirstChannelLink\\\",\\\"findMany\\\":\\\"findManyChannelLink\\\",\\\"create\\\":\\\"createOneChannelLink\\\",\\\"createMany\\\":\\\"createManyChannelLink\\\",\\\"delete\\\":\\\"deleteOneChannelLink\\\",\\\"update\\\":\\\"updateOneChannelLink\\\",\\\"deleteMany\\\":\\\"deleteManyChannelLink\\\",\\\"updateMany\\\":\\\"updateManyChannelLink\\\",\\\"upsert\\\":\\\"upsertOneChannelLink\\\",\\\"aggregate\\\":\\\"aggregateChannelLink\\\",\\\"groupBy\\\":\\\"groupByChannelLink\\\"},{\\\"model\\\":\\\"Video\\\",\\\"plural\\\":\\\"videos\\\",\\\"findUnique\\\":\\\"findUniqueVideo\\\",\\\"findFirst\\\":\\\"findFirstVideo\\\",\\\"findMany\\\":\\\"findManyVideo\\\",\\\"create\\\":\\\"createOneVideo\\\",\\\"createMany\\\":\\\"createManyVideo\\\",\\\"delete\\\":\\\"deleteOneVideo\\\",\\\"update\\\":\\\"updateOneVideo\\\",\\\"deleteMany\\\":\\\"deleteManyVideo\\\",\\\"updateMany\\\":\\\"updateManyVideo\\\",\\\"upsert\\\":\\\"upsertOneVideo\\\",\\\"aggregate\\\":\\\"aggregateVideo\\\",\\\"groupBy\\\":\\\"groupByVideo\\\"},{\\\"model\\\":\\\"QuotaUsage\\\",\\\"plural\\\":\\\"quotaUsages\\\",\\\"findUnique\\\":\\\"findUniqueQuotaUsage\\\",\\\"findFirst\\\":\\\"findFirstQuotaUsage\\\",\\\"findMany\\\":\\\"findManyQuotaUsage\\\",\\\"create\\\":\\\"createOneQuotaUsage\\\",\\\"createMany\\\":\\\"createManyQuotaUsage\\\",\\\"delete\\\":\\\"deleteOneQuotaUsage\\\",\\\"update\\\":\\\"updateOneQuotaUsage\\\",\\\"deleteMany\\\":\\\"deleteManyQuotaUsage\\\",\\\"updateMany\\\":\\\"updateManyQuotaUsage\\\",\\\"upsert\\\":\\\"upsertOneQuotaUsage\\\",\\\"aggregate\\\":\\\"aggregateQuotaUsage\\\",\\\"groupBy\\\":\\\"groupByQuotaUsage\\\"}],\\\"otherOperations\\\":{\\\"read\\\":[],\\\"write\\\":[\\\"executeRaw\\\",\\\"queryRaw\\\"]}}}\"\nconst dmmf = JSON.parse(dmmfString)\nexports.Prisma.dmmf = JSON.parse(dmmfString)\n\n/**\n * Create the Client\n */\nconst config = {\n  \"generator\": {\n    \"name\": \"client\",\n    \"provider\": {\n      \"fromEnvVar\": null,\n      \"value\": \"prisma-client-js\"\n    },\n    \"output\": {\n      \"value\": \"/Users/joostschuur/Code/Personal/_Tests/yarn-workspaces-prisma-nextjs-serverless/node_modules/@prisma/client\",\n      \"fromEnvVar\": null\n    },\n    \"config\": {\n      \"engineType\": \"library\"\n    },\n    \"binaryTargets\": [\n      {\n        \"fromEnvVar\": null,\n        \"value\": \"darwin-arm64\"\n      },\n      {\n        \"fromEnvVar\": null,\n        \"value\": \"darwin\"\n      },\n      {\n        \"fromEnvVar\": null,\n        \"value\": \"rhel-openssl-1.0.x\"\n      }\n    ],\n    \"previewFeatures\": [\n      \"fullTextSearch\"\n    ]\n  },\n  \"relativeEnvPaths\": {\n    \"rootEnvPath\": null,\n    \"schemaEnvPath\": \"../../../packages/prisma/.env\"\n  },\n  \"relativePath\": \"../../../packages/prisma/prisma\",\n  \"clientVersion\": \"4.1.1\",\n  \"engineVersion\": \"8d8414deb360336e4698a65aa45a1fbaf1ce13d8\",\n  \"datasourceNames\": [\n    \"db\"\n  ],\n  \"activeProvider\": \"postgresql\",\n  \"dataProxy\": false\n}\nconfig.document = dmmf\nconfig.dirname = dirname\n\n\n\n\nconst { warnEnvConflicts } = __webpack_require__(/*! @prisma/client/runtime/index */ \"../../node_modules/@prisma/client/runtime/index.js\")\n\nwarnEnvConflicts({\n    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),\n    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)\n})\nconst PrismaClient = getPrismaClient(config)\nexports.PrismaClient = PrismaClient\nObject.assign(exports, Prisma)\n\npath.join(__dirname, \"libquery_engine-darwin-arm64.dylib.node\");\npath.join(process.cwd(), \"../../node_modules/.prisma/client/libquery_engine-darwin-arm64.dylib.node\")\n\npath.join(__dirname, \"libquery_engine-darwin.dylib.node\");\npath.join(process.cwd(), \"../../node_modules/.prisma/client/libquery_engine-darwin.dylib.node\")\n\npath.join(__dirname, \"libquery_engine-rhel-openssl-1.0.x.so.node\");\npath.join(process.cwd(), \"../../node_modules/.prisma/client/libquery_engine-rhel-openssl-1.0.x.so.node\")\npath.join(__dirname, \"schema.prisma\");\npath.join(process.cwd(), \"../../node_modules/.prisma/client/schema.prisma\")\n\n\n//# sourceURL=webpack://backend/../../node_modules/.prisma/client/index.js?");

/***/ }),

/***/ "../../node_modules/@prisma/client/index.js":
/*!**************************************************!*\
  !*** ../../node_modules/@prisma/client/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n  ...__webpack_require__(/*! .prisma/client/index */ \"../../node_modules/.prisma/client/index.js\"),\n}\n\n\n//# sourceURL=webpack://backend/../../node_modules/@prisma/client/index.js?");

/***/ }),

/***/ "../../node_modules/@prisma/client/runtime/index.js":
/*!**********************************************************!*\
  !*** ../../node_modules/@prisma/client/runtime/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/***/ }),

/***/ "./src/videos.js":
/*!***********************!*\
  !*** ./src/videos.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// import { PrismaClient } from '@prisma/client';\nconst { PrismaClient } = __webpack_require__(/*! @prisma/client */ \"../../node_modules/@prisma/client/index.js\");\n\nconst prisma = new PrismaClient();\n\n// export const handler = async (event) => {\nmodule.exports.handler = async (event) => {\n  const videos = await prisma.video.findMany({ take: 10 });\n\n  return {\n    statusCode: 200,\n    body: JSON.stringify(videos, null, 2),\n  };\n};\n\n\n//# sourceURL=webpack://backend/./src/videos.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("console");

/***/ }),

/***/ "diagnostics_channel":
/*!**************************************!*\
  !*** external "diagnostics_channel" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("diagnostics_channel");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "stream/web":
/*!*****************************!*\
  !*** external "stream/web" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream/web");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "util/types":
/*!*****************************!*\
  !*** external "util/types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("util/types");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/videos.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;