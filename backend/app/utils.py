from pydantic import AnyUrl, validate_call


@validate_call(validate_return=True)
def parse_cors(v: list | str) -> list[AnyUrl]:
    """Validates a list, or comma separated string, of COR origin URLs. Returns them as a list of URLs."""
    if isinstance(v, str) and not v.startswith("["):
        return [i.strip() for i in v.split(",")]
    elif isinstance(v, list):
        return v
