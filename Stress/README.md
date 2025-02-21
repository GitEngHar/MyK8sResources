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

- confirm delete k6
```shell
kubectl delete all --all -n k6-operator-system
```

- confirm Deployment
```shell
kubectl get all -n k6-operator-system
```

- delete crd resource
```shell
k delete crd testruns.k6.io
kubectl delete crd privateloadzones.k6.io
```

- confirm crd resource
```shell
k get crds | grep k6
```