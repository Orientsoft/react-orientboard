cmd=$(which tmux) # tmux path
session=orientsoft   # session name

if [ -z $cmd ]; then
  echo "You need to install tmux."
  exit 1
fi

echo "Starting..."

$cmd has -t $session

if [ $? != 0 ]; then
  $cmd new -d -s $session
  $cmd neww -n watch -t $session "supervisor -w routes,app.js,bin,lib ./bin/www"
  $cmd splitw -v -p 50 -t $session "gulp watch-all"
fi

$cmd att -t $session
