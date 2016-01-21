cmd=$(which tmux) # tmux path
session=orientsoft   # session name

if [ -z $cmd ]; then
  echo "You need to install tmux."
  exit 1
fi

$cmd has -t $session

if [ $? != 0 ]; then
  $cmd new -d -s $session
  $cmd neww -n watch -t $session "npm start"
  $cmd splitw -v -p 50 -t $session "gulp watch"
  $cmd splitw -h -p 50 -t $session "gulp watch -f ./app/component-test.js"
fi

$cmd att -t $session
