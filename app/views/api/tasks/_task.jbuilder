json.extract! task, :id, :label, :order, :user_id, :restarted_count, :project_id
json.created_at task.created_at.to_i
json.due_at task.due_at.to_i
json.finished_at task.finished_at.to_i
json.abandoned_at task.abandoned_at.to_i
