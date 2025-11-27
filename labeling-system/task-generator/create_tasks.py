# labeling-system/task-generator/create_tasks.py
import json
import uuid

def create_tasks_from_dataset(dataset_path, out_json="/tmp/label_tasks.json"):
    # naive splitter: each row becomes one task
    import pandas as pd
    df = pd.read_csv(dataset_path)
    tasks = []
    for idx, row in df.iterrows():
        tasks.append({
            "id": str(uuid.uuid4()),
            "prompt": f"Label row {idx}",
            "data": row.to_dict(),
            "reward": 0.5
        })
    with open(out_json, "w") as f:
        json.dump(tasks, f)
    print("Created", len(tasks), "tasks at", out_json)
