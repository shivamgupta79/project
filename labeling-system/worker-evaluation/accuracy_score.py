# labeling-system/worker-evaluation/accuracy_score.py
def compute_accuracy(worker_results, gold_standard):
    # worker_results: list of {taskId, label}
    total = 0
    correct = 0
    gs_map = {g["taskId"]: g["label"] for g in gold_standard}
    for r in worker_results:
        total += 1
        if r["taskId"] in gs_map and r["label"] == gs_map[r["taskId"]]:
            correct += 1
    return correct / total if total else 0.0
