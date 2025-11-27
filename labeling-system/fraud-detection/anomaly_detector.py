# labeling-system/fraud-detection/anomaly_detector.py
def detect_fast_clickers(worker_timings, threshold_seconds=1.0):
    # worker_timings: list of seconds per label
    avg = sum(worker_timings)/len(worker_timings) if worker_timings else 999
    return avg < threshold_seconds
