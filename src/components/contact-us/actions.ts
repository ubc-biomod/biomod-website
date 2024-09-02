"use server";

export async function submitContactForm(formData: FormData) {
  formData.append("access_key", process.env.WEB3FORMS_KEY ?? "");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  return await response.json();
}
