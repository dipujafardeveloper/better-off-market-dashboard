"use client";
import { Button, ConfigProvider, Form, Image, Input } from "antd";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import { toast } from "sonner";
import { Camera, Trash2 } from "lucide-react";
import {
  useGetMyProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profileApi";
import ProfileFormSkeleton from "./ProfileFormSkeleton";
import { getInitials } from "@/utils/getInitials";

const PersonalInformationContainer = () => {
  const route = useRouter();
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);
  const [fileName, setFileName] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const [updateProfile, { isLoading: updateProfileLoading }] =
    useUpdateProfileMutation();

  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = async (values) => {
    const formattedData = {
      name: values.name,
      phoneNumber: values.phone,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(formattedData));

    if (fileName) {
      formData.append("profile", fileName);
    }
    try {
      await updateProfile(formData).unwrap();
      toast.success("Successfully Change personal information", {
        duration: 1000,
      });
      setEdit(false);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;

    const file = input.files?.[0];
    console.log(file);

    if (file) {
      const url = URL.createObjectURL(file);
      console.log(url);
      setImageUrl(url);
      setFileName(file);
    } else {
      setImageUrl(null);
      setFileName(null);
    }

    input.value = "";
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span
            onClick={() => route.back()}
            style={{ background: "var(--color-main)" }}
            className="cursor-pointer  p-2 rounded-full"
          >
            <FaArrowLeft size={20} color="#fff" />
          </span>
          <h4 className="text-2xl font-medium text-text-color">
            Personal Information
          </h4>
        </div>
        <div className={edit ? "hidden" : ""}>
          <Button
            style={{
              background: "var(--color-main)",
              border: "none",
              color: "var(--color-secondary)",
            }}
            onClick={() => setEdit(true)}
            size="large"
            icon={<FiEdit />}
          >
            Edit Profile
          </Button>
        </div>
      </div>

      <hr className="my-4" />

      {/* personal information */}
      {isLoading ? (
        <ProfileFormSkeleton />
      ) : (
        <div className="mt-10 flex justify-center flex-col xl:flex-row items-center  gap-10">
          <div className="bg-[#fff] h-[365px] md:w-[350px] rounded-xl  flex justify-center items-center  text-text-color">
            <div className="space-y-1 relative">
              <div className="relative group">
                {data?.data?.profile || imageUrl ? (
                  <Image
                    src={imageUrl || data?.data?.profile}
                    alt="adminProfile"
                    width={144}
                    height={144}
                    className="size-36 object-cover rounded-full flex justify-center items-center"
                  ></Image>
                ) : (
                  <div className="size-36 rounded-full bg-primary-pink flex justify-center items-center text-2xl  bg-[#DCE6FF]">
                    {getInitials(data?.data?.name)}
                  </div>
                )}

                {/* cancel button */}
                {fileName && imageUrl && (
                  <div
                    className="absolute left-4 top-2 cursor-pointer rounded-md bg-primary-pink opacity-0 duration-1000 group-hover:opacity-100"
                    onClick={() => {
                      setFileName(null);
                      setImageUrl(null);
                    }}
                  >
                    <Trash2 size={20} color="red" />
                  </div>
                )}
                {/* upload image */}
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                {/* upload button */}
                <label
                  htmlFor="fileInput"
                  className="flex cursor-pointer flex-col items-center"
                >
                  <div className="bg-white text-black text-lg p-1 rounded-full  absolute bottom-0 right-3">
                    <Camera size={20} />
                  </div>
                </label>
              </div>
              <h3 className="text-2xl text-center">Admin</h3>
            </div>
          </div>
          {/* form */}
          <div className="w-2/4">
            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    colorBgContainer: "#fff",
                    colorText: "#333",
                  },
                  Form: {
                    labelColor: "#333",
                  },
                },
              }}
            >
              <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
                style={{
                  marginTop: "25px",
                }}
                initialValues={{
                  name: data?.data?.name,
                  email: data?.data?.email,
                  phone: data?.data?.phoneNumber,
                }}
              >
                {/*  input  name */}
                <Form.Item label="Name" name="name">
                  {edit ? (
                    <Input size="large" placeholder="Enter full name "></Input>
                  ) : (
                    <Input
                      size="large"
                      placeholder="Enter full name "
                      readOnly
                    ></Input>
                  )}
                </Form.Item>

                {/*  input  email */}
                <Form.Item label="Email" name="email">
                  <Input
                    size="large"
                    placeholder="Enter email"
                    readOnly
                    className="cursor-not-allowed"
                  ></Input>
                </Form.Item>

                {/* input  phone number  */}
                <Form.Item label="Phone Number" name="phone">
                  {edit ? (
                    <Input
                      size="large"
                      placeholder="Enter Phone number"
                    ></Input>
                  ) : (
                    <Input
                      size="large"
                      placeholder="Enter Phone number"
                      readOnly
                    ></Input>
                  )}
                </Form.Item>

                <div className={edit ? "" : "hidden"}>
                  <Button
                    htmlType="submit"
                    size="large"
                    block
                    style={{ border: "none" }}
                    loading={updateProfileLoading}
                    className="bg-primary-pink text-white "
                  >
                    Save Change
                  </Button>
                </div>
              </Form>
            </ConfigProvider>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInformationContainer;
