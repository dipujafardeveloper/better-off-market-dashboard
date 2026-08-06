const antTheme = {
  token: {
    colorPrimary: "#000",
    colorInfo: "#000",
  },
  components: {
    Layout: {
      bodyBg: "rgb(255,255,255)",
    },
    Menu: {
      itemSelectedColor: "#000",
      itemSelectedBg: "#fff"
    },
    Table: {
      headerBg: "#F9FAFB",
      headerColor: "#667085",
      colorBgContainer: "var(--color-section-bg)",
      headerSplitColor: "#F9FAFB",
      colorText: "var(--color-primary-gray)",
      borderColor: "var(--color-section-bg)",
      rowHoverBg: "var(--color-main-bg)",
    },
    Modal: {
      colorIcon: "rgba(255,255,255,0.45)",
      contentBg: "var(--color-section-bg)",
      colorText: "var(--color-text-color)",
    },

    Button: {
      defaultBg: "var(--color-main)",
      defaultColor: "rgba(255,255,255,0.88)",
    },
    Popconfirm: {
      colorWarning: "rgb(205,3,53)",
    },
    Form: {
      labelFontSize: 18,
    },
    Select: {
      optionSelectedBg: "#ECECEC",
    },
  },
};

export default antTheme;
