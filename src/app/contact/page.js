import Link from "next/link";

const contactFormFields = [
  {
    label: "Name",
    placeholder: "Enter your name",
    name: "name",
    type: "text",
    element: "input",
  },
  {
    label: "Email address",
    placeholder: "Enter your email address",
    name: "email",
    type: "email",
    element: "input",
  },
  {
    label: "How can we help?",
    placeholder:
      "Tell us a bit about your situation, and what you're looking for help with",
    name: "content",
    element: "textarea",
  },
];

export default function ContactPage() {
  /**
   *
   * @param {FormData} formData
   */
  const handleFormSubmit = async (formData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const content = formData.get("content");
  };

  return (
    <main className="flex flex-1 justify-center py-5 px-4 sm:px-40">
      <div className="flex flex-col max-w-[960px] w-full">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex md:min-w-72 flex-col gap-3">
            <h1 className="text-[#141414] text-4xl font-black leading-tight tracking-[-0.033em]">
              We're here to help
            </h1>
            <p className="text-neutral-500 text-base font-normal leading-normal">
              Your first consultation is free. Connect with us to learn more
              about our services.
            </p>
          </div>
        </div>

        <form className="space-y-4 max-w-[480px]" action={handleFormSubmit}>
          {contactFormFields.map((field) => (
            <div className="px-4" key={field.label}>
              <label className="flex flex-col">
                <span className="text-[#141414] text-base font-medium leading-normal pb-2">
                  {field.label}
                </span>
                {field.element === "input" ? (
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border border-[#E0E0E0] bg-white p-[15px] text-base font-normal leading-normal text-[#141414] placeholder-neutral-500 focus:border-[#E0E0E0] focus:outline-none focus:ring-0"
                  />
                ) : (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full min-h-36 rounded-lg border border-[#E0E0E0] bg-white p-[15px] text-base font-normal leading-normal text-[#141414] placeholder-neutral-500 focus:border-[#E0E0E0] focus:outline-none focus:ring-0 resize-none"
                  />
                )}
              </label>
            </div>
          ))}
          <div className="px-4 flex justify-end">
            <button
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#39E079] text-[#141414] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
