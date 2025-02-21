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
kubectl delete clusterrole k6-operator-manager-role
kubectl delete clusterrole k6-operator-metrics-reader
kubectl delete clusterrole k6-operator-proxy-role
kubectl delete clusterrolebinding k6-operator-manager-rolebinding
kubectl delete clusterrolebinding k6-operator-proxy-rolebinding
kubectl delete crd privateloadzones.k6.io
k delete ns k6-operator
```

- confirm crd resource
```shell
k get crds | grep k6
```

- helm deploy
```shell
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
helm upgrade k6-operator grafana/k6-operator \
  --install \
  --namespace k6-operator \
  --create-namespace
```