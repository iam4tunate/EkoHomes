import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string[];
};

export default function FileUploader({
  fieldChange,
  mediaUrl,
}: FileUploaderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<string[]>(mediaUrl ? mediaUrl : []);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFileUrls(() => []);
      setFiles(acceptedFiles);
      fieldChange(acceptedFiles);

      const newFileUrls = acceptedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setFileUrls((prevUrls) => [...prevUrls, ...newFileUrls]);
    },
    [fieldChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col rounded-xl cursor-pointer">
      <input {...getInputProps()} className="cursor-pointer" />
      {fileUrls.length > 0 ? (
        <>
          <div className="flex flex-wrap gap-3 flex-1 justify-center w-full p-5 overflow-y-auto bg-accent rounded-xl">
            {fileUrls.map((url) => (
              <img src={url} alt="image" className="w-24" />
            ))}
          </div>
          <p className="pt-2 text-center text-sm">
            Click or drag & drop photo to replace
          </p>
        </>
      ) : (
        <div className="flex items-center justify-center flex-col p-7 h-80 lg:h-[350px] bg-accent rounded-lg">
          <img
            src="/public/images/file-upload.svg"
            width={96}
            height={77}
            alt="file-upload"
          />
          <h4 className="mb-2 mt-6">Drag & drop photo here</h4>
          <p className="mb-6">SVG, PNG, JPG</p>
          <Button className="bg-primary">Select from computer</Button>
        </div>
      )}
    </div>
  );
}
