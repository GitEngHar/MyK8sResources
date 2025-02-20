- nginx で topコマンドを使えるようにする
```bash
apt-get update && apt-get install -y procps
```

- exec
```
k exec -it xx -- bash
```

- delete job
```shell
k delete job stress-job
```

- apply job
```shell
k apply -f ./stress-job.yaml
```