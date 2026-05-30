const colorMap: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  read: "bg-gray-100 text-gray-700",
  replied: "bg-yellow-100 text-yellow-700",
  resolved: "bg-green-100 text-green-700",
  spam: "bg-red-100 text-red-700",
  active: "bg-green-100 text-green-700",
  inactive: "bg-gray-100 text-gray-500",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
        colorMap[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}
