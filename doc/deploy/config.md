# Configuration

Your config file should be a json file with the following format:

```json
{
  "components": [
    "example"
  ],
  "mongo": {
    "host": "MONGO_HOST",
    "port": 27017,
    "db": "orientboard"
  },
  "redis": {
    "host": "REDIS_HOST",
    "port": 6379,
    "auth": "secret"
  }
}
```
