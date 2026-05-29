"""Quick SDMX test for one Fedstat indicator."""
from __future__ import annotations

import json
import sys

from probe_fedstat_sdmx import make_opener, probe_indicator

if __name__ == "__main__":
    ind = sys.argv[1] if len(sys.argv) > 1 else "31074"
    opener = make_opener()
    r = probe_indicator(opener, ind)
    print(json.dumps(r, ensure_ascii=False, indent=2, default=str))
