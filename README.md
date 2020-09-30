How to reproduce the issue:

1 - Run the command
```
 git clean -fdx && yarn && yarn tsc -p packages/search && yarn tsc -p packages/search-core-notification
```

2 - observe that packages/search-core-notification/lib/Store/NotificationStore.d.ts imports ts files from the other package.

Note that the issue does not reproduce with TypeScript version 3.9.6
