# Action: Docker image semver latest

Search latest semver Image.

## Inputs

### image_name

**Required** Name of Image

Name of the docker image for the last semver version..

## Example Usage

```yaml
- name: Search latest semver Image
  uses: tinact/docker.image-latest@master
  with:
    image_name: 'arillso/ansible'
```

## Sponsor

- [ITIGO AG](https://itigo.ch)

## License

This project is under the MIT License. See the [LICENSE](licence) file for the full license text.

## Copyright

(c) 2020, Tinact
